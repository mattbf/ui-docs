import React from "react";

import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import { TrendUp } from "@phosphor-icons/react/dist/ssr";

import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { Tag } from "@/components/ui/Tag";
import { Text } from "@/components/ui/Text";

const positions = [
  {
    ticker: "VMRXX",
    orderStatus: "Placed",
    totalAmount: "$250.00",
    interest: "5.31",
  },
  {
    ticker: "FGTXX",
    orderStatus: "Pending",
    totalAmount: "$150.00",
    interest: "5.31",
  },
  {
    ticker: "FEDXX",
    orderStatus: "Sold",
    totalAmount: "$350.00",
    interest: "5.31",
  },
  {
    ticker: "MULSX",
    orderStatus: "Placed",
    totalAmount: "$450.00",
    interest: "5.31",
  },
  {
    ticker: "VUSXX",
    orderStatus: "Placed",
    totalAmount: "$550.00",
    interest: "5.31",
  },
  {
    ticker: "DGUXX",
    orderStatus: "Pending",
    totalAmount: "$200.00",
    interest: "5.31",
  },
  {
    ticker: "DSVXX",
    orderStatus: "Sold",
    totalAmount: "$300.00",
    interest: "5.31",
  },
];

const TablePage = () => (
  <ComponentDocsPageTemplate title="Table" githubLink={"https://github.com/org/repo-name/blob/develop/src/components/ui/Table.tsx"} path="/table">
    <div className="p-8 min-h-[750px] flex flex-col items-start justify-center">
      <Text variant="body" size="md">
        Place sub components within the table cells
      </Text>
      <Text variant="body" size="sm" className="text-text-secondary mb-4">
        - Orange borders for affect, not on actual component.
      </Text>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ticker</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Interest</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {positions.map((position) => (
            <TableRow key={position.ticker}>
              <TableCell className="border border-orange-500">{position.ticker}</TableCell>
              <TableCell className="border border-orange-500">
                <Tag variant="outline" color="white">
                  {position.orderStatus}
                </Tag>
              </TableCell>
              <TableCell className="text-grass-500 font-mono border border-orange-500">
                <div className="flex flex-row gap-x-1">
                  <TrendUp size={16} />
                  {position.interest}
                </div>
              </TableCell>
              <TableCell className="text-text-tertiary text-right border border-orange-500">{position.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </ComponentDocsPageTemplate>
);

export default TablePage;
