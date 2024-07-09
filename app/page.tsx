import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <h1 className="mb-4 font-bold text-2xl">Astro</h1>

        <h1 className="mb-4 font-bold text-xl">Franken UI in Astro</h1>

        <div className="flex">
          <div className="flex flex-col gap-5 max-w-[600px]">
            <div className="flex flex-row items-center">
              <strong className="mr-6 font-bold">Badges</strong>

              <Badge>1</Badge>
              <Badge>100</Badge>
            </div>

            <div className="flex flex-row items-center">
              <strong className="mr-6 font-bold">Buttons</strong>
              <p uk-margin>
                <Button>Link</Button>
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
              </p>
            </div>

            <div className="flex flex-row items-center">
              <strong className="mr-6 font-bold">Breadcrumb</strong>

              <div>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/components">
                        Components
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>

            <div className="flex flex-row items-center">
              <strong className="mr-6 font-bold">Dropdown</strong>

              <div id="dtarget">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button>Open Dropdown</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <strong className="mr-6 font-bold">Form</strong>

              <div>
                <form className="flex flex-col gap-4">
                  <Input
                    className="uk-input"
                    type="text"
                    placeholder="This is great"
                  />

                  <Textarea />
                  <RadioGroup>
                    <RadioGroupItem value="cool" />
                  </RadioGroup>
                  <Checkbox />
                  <Input className="uk-range" type="range" />
                </form>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 ml-16">
            <div className="entry">
              <strong className="mr-6 font-bold">Card</strong>

              <div className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Default Title</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="entry">
              <strong className="mr-6 font-bold">Table</strong>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Table Heading</TableHead>
                    <TableHead>Table Heading</TableHead>
                    <TableHead>Table Heading</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Table Data</TableCell>
                    <TableCell>Table Data</TableCell>
                    <TableCell>Table Data</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Table Data</TableCell>
                    <TableCell>Table Data</TableCell>
                    <TableCell>Table Data</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Table Data</TableCell>
                    <TableCell>Table Data</TableCell>
                    <TableCell>Table Data</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
