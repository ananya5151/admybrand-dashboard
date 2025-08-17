import React from "react";

export function Skeleton({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`animate-pulse bg-muted/40 rounded-md ${className}`}
            {...props}
        />
    );
}
