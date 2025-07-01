import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import "./BackgroundPaths.css";

// Path generation function
function generateAestheticPath(index, position, type) {
    const baseAmplitude =
        type === "primary" ? 150 : type === "secondary" ? 100 : 60;
    const phase = index * 0.2;
    const points = [];
    const segments = type === "primary" ? 10 : type === "secondary" ? 8 : 6;

    const startX = 2400;
    const startY = 800;
    const endX = -2400;
    const endY = -800 + index * 25;

    for (let i = 0; i <= segments; i++) {
        const progress = i / segments;
        const eased = 1 - (1 - progress) ** 2;

        const baseX = startX + (endX - startX) * eased;
        const baseY = startY + (endY - startY) * eased;

        const amplitudeFactor = 1 - eased * 0.3;
        const wave1 =
            Math.sin(progress * Math.PI * 3 + phase) *
            (baseAmplitude * 0.7 * amplitudeFactor);
        const wave2 =
            Math.cos(progress * Math.PI * 4 + phase) *
            (baseAmplitude * 0.3 * amplitudeFactor);
        const wave3 =
            Math.sin(progress * Math.PI * 2 + phase) *
            (baseAmplitude * 0.2 * amplitudeFactor);

        points.push({
            x: baseX * position,
            y: baseY + wave1 + wave2 + wave3,
        });
    }

    const pathCommands = points.map((point, i) => {
        if (i === 0) return `M ${point.x} ${point.y}`;
        const prevPoint = points[i - 1];
        const tension = 0.4;
        const cp1x = prevPoint.x + (point.x - prevPoint.x) * tension;
        const cp1y = prevPoint.y;
        const cp2x = prevPoint.x + (point.x - prevPoint.x) * (1 - tension);
        const cp2y = point.y;
        return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
    });

    return pathCommands.join(" ");
}

const generateUniqueId = (prefix) =>
    `${prefix}-${Math.random().toString(36).substr(2, 9)}`;

// Memoized FloatingPaths component
const FloatingPaths = memo(function FloatingPaths({ position }) {
    // Increased number of paths while maintaining optimization
    const primaryPaths = useMemo(
        () =>
            Array.from({ length: 12 }, (_, i) => ({
                id: generateUniqueId("primary"),
                d: generateAestheticPath(i, position, "primary"),
                opacity: 0.15 + i * 0.02,
                width: 4 + i * 0.3,
                duration: 2.5,
                delay: 0,
            })),
        [position]
    );

    const secondaryPaths = useMemo(
        () =>
            Array.from({ length: 15 }, (_, i) => ({
                id: generateUniqueId("secondary"),
                d: generateAestheticPath(i, position, "secondary"),
                opacity: 0.12 + i * 0.015,
                width: 3 + i * 0.25,
                duration: 2,
                delay: 0,
            })),
        [position]
    );

    const accentPaths = useMemo(
        () =>
            Array.from({ length: 10 }, (_, i) => ({
                id: generateUniqueId("accent"),
                d: generateAestheticPath(i, position, "accent"),
                opacity: 0.08 + i * 0.12,
                width: 2 + i * 0.2,
                duration: 1.5,
                delay: 0,
            })),
        [position]
    );

    // Базовые целевые значения
    const baseAnimate = {
        opacity: 1,
        scale: 1,
    };

    return (
        <div className="floating-paths-inner">
            <svg
                className="floating-svg"
                viewBox="-2400 -800 4800 1600"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Ocean Protocol Background Paths</title>
                <defs>
                    <linearGradient
                        id="oceanGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="rgba(255, 105, 180, 0.5)" />
                        <stop
                            offset="50%"
                            stopColor="rgba(255, 20, 147, 0.6)"
                        />
                        <stop
                            offset="100%"
                            stopColor="rgba(219, 39, 119, 0.4)"
                        />
                    </linearGradient>
                    <linearGradient
                        id="oceanGradient2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="rgba(236, 72, 153, 0.3)" />
                        <stop
                            offset="50%"
                            stopColor="rgba(255, 105, 180, 0.4)"
                        />
                        <stop
                            offset="100%"
                            stopColor="rgba(255, 20, 147, 0.3)"
                        />
                    </linearGradient>
                </defs>

                <g className="primary-waves">
                    {primaryPaths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#oceanGradient)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                ...baseAnimate,
                                translateY: [0, -4, 0],
                            }}
                            transition={{
                                opacity: { duration: 0.8 },
                                scale: { duration: 0.8 },
                                translateY: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                            }}
                            style={{ opacity: path.opacity }}
                        />
                    ))}
                </g>

                <g className="secondary-waves" style={{ opacity: 0.8 }}>
                    {secondaryPaths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#oceanGradient2)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                                ...baseAnimate,
                                translateY: [0, -2, 0],
                            }}
                            transition={{
                                opacity: { duration: 0.8 },
                                scale: { duration: 0.8 },
                                translateY: {
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                            }}
                            style={{ opacity: path.opacity }}
                        />
                    ))}
                </g>

                <g className="accent-waves" style={{ opacity: 0.6 }}>
                    {accentPaths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#oceanGradient)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                ...baseAnimate,
                                translateY: [0, -1, 0],
                            }}
                            transition={{
                                opacity: { duration: 0.8 },
                                scale: { duration: 0.8 },
                                translateY: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                            }}
                            style={{ opacity: path.opacity }}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
});

// Memoized AnimatedTitle component
const AnimatedTitle = memo(function AnimatedTitle({ title, subtitle }) {
    const words = title.split(" ");
    const first = words[0]; // OCEAN
    const middle = words.slice(1, -1).join(" "); // RESEARCH
    const last = words[words.length - 1]; // HUB
    
    return (
        <div className="text-center">
            <motion.h1 
                className="animated-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    ease: [0.2, 0.65, 0.3, 0.9],
                }}
            >
                <span className="highlight-word">{first}</span>
                {middle && ` ${middle} `}
                <span className="highlight-word">{last}</span>
            </motion.h1>
            {subtitle && (
                <motion.p
                    className="animated-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
});

export default memo(function BackgroundPaths({
    title = "Ocean Protocol",
    subtitle,
    children,
    className = "",
}) {
    return (
        <div className={`background-paths-root ${className}`}>
            <div className="floating-paths-wrapper">
                <FloatingPaths position={1} />
            </div>

            <div className="inner-content">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <AnimatedTitle title={title} subtitle={subtitle} />
                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.2, 0.65, 0.3, 0.9],
                            }}
                        >
                            {children}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}); 