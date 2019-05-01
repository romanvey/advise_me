export interface Message {
  content: string[];
  isYour: boolean;
}

export function createMessage(content, isYour) {
  const message: Message = {
    content,
    isYour
  };

  return message;
}
