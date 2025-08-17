import { Skeleton } from "../ui/skeleton";

export function ChartSkeleton() {
    return (
        <div className="w-full h-[300px] flex items-center justify-center">
            <Skeleton className="w-full h-full rounded-lg" />
        </div>
    );
}

export function CardSkeleton() {
    return (
        <div className="w-full h-[120px] flex items-center justify-center">
            <Skeleton className="w-full h-full rounded-lg" />
        </div>
    );
}

export function TableSkeleton() {
    return (
        <div className="w-full h-[400px] flex items-center justify-center">
            <Skeleton className="w-full h-full rounded-lg" />
        </div>
    );
}
