import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";

interface ExportButtonProps {
    onExport: () => Promise<void>;
    label?: string;
}

export function ExportButton({ onExport, label = "Export" }: ExportButtonProps) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleExport() {
        setLoading(true);
        setSuccess(false);
        try {
            await onExport();
            setSuccess(true);
            setTimeout(() => setSuccess(false), 2000);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Button onClick={handleExport} disabled={loading} variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            {loading ? "Exporting..." : success ? "Done!" : label}
        </Button>
    );
}
