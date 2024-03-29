import {
  ActionChatIcon,
  InterfaceMoreIcon,
} from "../../../../packages/fnf-icons/dist";
import {
  Cell,
  Dropdown,
  HeaderCell,
  IconButton,
  Menu,
  Paragraph,
  toaster,
} from "@fnf-ds/ui";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";

type UserType = "user" | "manager" | "admin";
type User = {
  name: string;
  type: UserType;
  position: string;
  bio: string;
  active: boolean;
};

const MOCK_USERS: User[] = [
  {
    name: "Minho sun",
    type: "admin",
    position: "ERP PM",
    bio: "google.com",
    active: true,
  },
  {
    name: "Solmin seo",
    type: "manager",
    position: "HR Hero",
    bio: "github.com",
    active: false,
  },
  {
    name: "Dorothy",
    type: "user",
    position: "mukbang youtuber",
    bio: "naver.com",
    active: true,
  },
  {
    name: "June kim",
    type: "user",
    position: "Backend developer",
    bio: "mysql.com",
    active: false,
  },
  {
    name: "Changhee seo",
    type: "manager",
    position: "One manned design",
    bio: "figma.com",
    active: true,
  },
];
const generateUsers = (times: number) =>
  Array.from({ length: times })
    .map(() => MOCK_USERS)
    .flat();
const initialDatas = generateUsers(1);
const manyDatas = generateUsers(5);

const columnHelper = createColumnHelper<User>();

const Table = () => {
  const defaultColumns = useMemo(() => {
    return [
      columnHelper.accessor("name", {
        header: () => <HeaderCell flex="1">Name</HeaderCell>,
        cell: (info) => {
          return (
            <Cell display="flex" alignItems="center" gap={8} flex="1">
              {info.getValue()}
            </Cell>
          );
        },
      }),
      columnHelper.accessor("type", {
        header: () => {
          return <HeaderCell flex="1">Type</HeaderCell>;
        },
        cell: (info) => {
          return <Cell flex="1"> {info.getValue()}</Cell>;
        },
      }),
      columnHelper.accessor("position", {
        header: () => <HeaderCell flex="1">Position</HeaderCell>,
        cell: (info) => {
          const CellData = info.getValue();
          return <Cell flex="1">{CellData}</Cell>;
        },
      }),
      columnHelper.display({
        id: "icon",
        header: () => (
          <HeaderCell width={60} display="flex" justifyContent="center">
            Icon
          </HeaderCell>
        ),
        cell: (info) => {
          const { name } = info.row.original;
          const onClick = () => {
            toaster.notify({
              title: "채팅",
              status: "info",
              children: `${name}와 채팅하기`,
            });
          };
          return (
            <Cell width={60} display="flex" justifyContent="center">
              <IconButton
                variant="ghost-secondary"
                onClick={onClick}
                size={32}
                Icon={<ActionChatIcon size={16} />}
              />
            </Cell>
          );
        },
      }),

      columnHelper.display({
        id: "menu",
        header: () => <HeaderCell width={50} />,
        cell: (info) => {
          return (
            <Cell width={50}>
              <Dropdown>
                <Dropdown.Trigger>
                  <IconButton
                    variant="ghost-secondary"
                    size={32}
                    Icon={<InterfaceMoreIcon size={12} />}
                  />
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Menu>
                    <Menu.Row onSelect={() => {}}>
                      <Paragraph size={200}>그룹명 수정</Paragraph>
                    </Menu.Row>
                    <Menu.Row>
                      <Paragraph size={200} color="R400">
                        삭제
                      </Paragraph>
                    </Menu.Row>
                  </Menu>
                </Dropdown.Menu>
              </Dropdown>
            </Cell>
          );
        },
      }),
    ] as ColumnDef<User>[];
  }, []);

  return <div>table</div>;
};
export default Table;
