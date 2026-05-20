'use client';

import React, { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';
import {Button,Card,FieldError,Form,Input,Label,TextField} from '@heroui/react';

const CommentSection = ({ idea }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(
        `http://localhost:5000/api/comments?ideaId=${idea._id}`
      );

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setComments(data || []);
    };

    if (idea?._id) {
      fetchComments();
    }
  }, [idea?._id]);

  // ADD COMMENT
  const handleAddComment = async (e) => {
    e.preventDefault();

    if (!user) return alert('Please login first');
    if (!commentText.trim()) return;

    const commentData = {
      userId: user.id,
      userImage: user?.image,
      userName: user?.name,
      comment: commentText,
      ideaId: idea._id,
    };

    setLoading(true);

    const res = await fetch('http://localhost:5000/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.error || "Server error");
    }

    const newComment = await res.json();

    setComments((prev) => [newComment, ...prev]);
    setCommentText('');
    setLoading(false);
  };
  return (
    <Card className="p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6">
        Comments ({comments.length})
      </h2>

      <Form onSubmit={handleAddComment} className="space-y-5 w-full">
        <TextField name="comment" isRequired className="w-full">
          <Label className="mb-2">Write Comment</Label>
          <Input value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Write your comment..." className="rounded-xl h-16 dark:bg-gray-700" />
          <FieldError />
        </TextField>

        <Button type="submit" color="primary" className="rounded-lg px-6 font-semibold" isDisabled={loading}>
          {loading ? 'Posting...' : 'Post Comment'}
        </Button>
      </Form>

      <div className="mt-10 space-y-5">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          comments.map((c) => (
            <div
              key={c._id}
              className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white  dark:bg-gray-700 shadow-sm">

              <img src={c?.userImage} name={c?.userName} className='h-12 w-12 rounded-full' />

              <div>
                <h3 className="font-semibold text-lg">
                  {c.userName}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {c.comment}
                </p>

                <span className="text-xs text-gray-400 mt-2 block">
                  {new Date(c.createdAt || Date.now()).toLocaleString([], {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  })}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};

export default CommentSection;
