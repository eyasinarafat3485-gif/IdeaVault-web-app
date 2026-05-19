// "use client";
// import React from 'react';
// import { Button, Textarea, Avatar, Badge, TextArea } from '@heroui/react';
// import { FaTrashAlt, FaPaperPlane, FaRegHeart } from 'react-icons/fa';

// const CommentSectionUI = () => {
//     return (
//         <div className="max-w-3xl mx-auto my-10 p-6 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
            
//             {/* Header */}
//             <div className="flex items-center justify-between mb-8">
//                 <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">
//                     Comments <span className="text-blue-600 ml-1">.02</span>
//                 </h3>
//                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
//                     Newest First
//                 </div>
//             </div>

//             {/* Input Box Area */}
//             <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 mb-10">
//                 <Avatar 
//                     src="https://i.pravatar.cc/150?u=me" 
//                     size="md" 
//                     className="flex-shrink-0 ring-2 ring-white dark:ring-slate-800"
//                 />
//                 <div className="w-full space-y-3">
//                     <TextArea
//                         variant="underlined"
//                         placeholder="Write a thoughtful comment..."
//                         className="w-full text-md"
//                         minRows={2}
//                     />
//                     <div className="flex justify-end items-center gap-4">
//                         <Button 
//                             color="primary" 
//                             radius="full"
//                             endContent={<FaPaperPlane size={12}/>}
//                             className="font-bold px-6 bg-slate-900 dark:bg-blue-600 text-white"
//                         >
//                             Send
//                         </Button>
//                     </div>
//                 </div>
//             </div>

//             {/* Comments List */}
//             <div className="space-y-8">
                
//                 {/* Single Comment Item */}
//                 <div className="group relative flex gap-5">
//                     {/* Line for visual threading */}
//                     <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800 group-last:hidden"></div>
                    
//                     <Avatar 
//                         src="https://i.pravatar.cc/150?u=1" 
//                         size="md"
//                         className="z-10 ring-4 ring-white dark:ring-slate-950"
//                     />
                    
//                     <div className="flex-grow pb-8">
//                         <div className="flex flex-col">
//                             <div className="flex items-center gap-2 mb-1">
//                                 <span className="font-bold text-slate-900 dark:text-white">Alex Johnson</span>
//                                 <span className="text-[10px] text-slate-400 font-medium">12 mins ago</span>
//                             </div>
//                             <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
//                                 This is exactly what I was looking for! The clean UI and the attention to detail in this idea is just mind-blowing. Keep it up! 🚀
//                             </p>
                            
//                             {/* Interactions */}
//                             <div className="flex items-center gap-4 mt-3">
//                                 <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-red-500 transition-colors">
//                                     <FaRegHeart /> 12
//                                 </button>
//                                 <button className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase">
//                                     Reply
//                                 </button>
//                                 <button className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto text-slate-300 hover:text-red-600">
//                                     <FaTrashAlt size={12} />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Another Comment Item */}
//                 <div className="group relative flex gap-5">
//                     <Avatar 
//                         src="https://i.pravatar.cc/150?u=2" 
//                         size="md"
//                         className="z-10 ring-4 ring-white dark:ring-slate-950"
//                     />
//                     <div className="flex-grow">
//                         <div className="flex flex-col">
//                             <div className="flex items-center gap-2 mb-1">
//                                 <span className="font-bold text-slate-900 dark:text-white">Sarah Wilson</span>
//                                 <span className="text-[10px] text-slate-400 font-medium">2 hours ago</span>
//                             </div>
//                             <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic border-l-2 border-slate-200 dark:border-slate-800 pl-3">
//                                 "The best way to predict the future is to create it." - Great implementation of this quote.
//                             </p>
//                             <div className="flex items-center gap-4 mt-3">
//                                 <button className="flex items-center gap-1.5 text-xs font-bold text-red-500 transition-colors">
//                                     <FaRegHeart /> 3
//                                 </button>
//                                 <button className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase">
//                                     Reply
//                                 </button>
//                                 <button className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto text-slate-300 hover:text-red-600">
//                                     <FaTrashAlt size={12} />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default CommentSectionUI;