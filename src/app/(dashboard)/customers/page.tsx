import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomersTable } from "@/components/dashboard/CustomersTable";

export default function CustomersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
        <CardDescription>
          A list of your customers and their purchase history.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CustomersTable />
      </CardContent>
    </Card>
  );
}
