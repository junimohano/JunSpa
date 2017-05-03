interface Board {
    boardId: number;
    userId: string;
    title: string;
    content: string;
    createdDate: Date | null;
    updatedDate: Date | null;
    comments: Comment[];
}

