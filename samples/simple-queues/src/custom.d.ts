type QueuePropType = {
  queIndex: number;
  ques: Queue[];
  focusBox: (queIndex: number) => void;
  dequeue: (queIndex: number) => void;
};
