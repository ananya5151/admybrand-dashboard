import { useRef, useState, useEffect } from "react";

export function useAnimatedNumber(value: number, duration = 1000) {
    const ref = useRef<number>(value);
    const frame = useRef<number | null>(null);
    const [display, setDisplay] = useState(value);

    useEffect(() => {
        const start = ref.current;
        const change = value - start;
        const startTime = performance.now();

        function animate(now: number) {
            const elapsed = now - startTime;
            if (elapsed < duration) {
                const progress = elapsed / duration;
                setDisplay(start + change * progress);
                frame.current = requestAnimationFrame(animate);
            } else {
                setDisplay(value);
                ref.current = value;
            }
        }

        frame.current = requestAnimationFrame(animate);
        return () => {
            if (frame.current !== null) {
                cancelAnimationFrame(frame.current);
            }
        };
    }, [value, duration]);

    return Math.round(display);
}
