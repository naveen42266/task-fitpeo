
const OvalBar = (props: any) => {
    const { x, y, width, height, fill } = props;

    // Adjust the radius to make the bar more pill-shaped
    const radius = width / 2;

    return (
        <svg x={x} y={y} width={width} height={height}>
            <rect
                x={0}
                y={0}
                width={width - 10}
                height={height}
                rx={radius} // Rounded corners for top and bottom blend
                ry={radius}
                fill={fill}
            />
        </svg>
    );
};

export default OvalBar;
