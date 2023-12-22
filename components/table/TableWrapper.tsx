import { FileType } from "@/typings";
import { Button } from "../ui/button";
import { DataTable } from "./Table";
import { columns } from "./columns";

function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
    return (
        <div>
            <Button className="mb-14">Sort by ...</Button>
            <DataTable columns={columns} data={skeletonFiles} />
        </div>
    );
}

export default TableWrapper;
