export const Point = ({ style }) => {
    return (
        <span
            style={style}
            className="absolute flex h-3 w-3 items-center justify-center rounded-full border-[2px] border-primary bg-transparent"
        >
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary"></span>
        </span>
    );
};
