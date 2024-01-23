export type Theme = {
    id: string,
    author: string,
    name: string,
    description: string,
    json: {
        v: number,
        orange: string,
        orangeLight: string,
        orangeDark: string,
        background: string,
        foreground: string,
        foregroundOrange: string,
        tinting: string,
    },
    stats: {
        likes: number,
        dislikes: number,
    },
    time: number,
    private: boolean,
};
