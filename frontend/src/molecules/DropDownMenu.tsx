import React from "react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import {
	HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { useGetTagAndCategoriesQuery } from "../libs/graphql/generated/graphql-types";
import "../css/dropdownmenu.css"

const DropdownMenu = () => {
	const { loading, error, data } = useGetTagAndCategoriesQuery();

	if (loading) return
	if (error) return <p>Error :</p>;

	return (
		<Dropdown.Root>
			<Dropdown.Trigger asChild>
				<button className="IconButton" aria-label="Customise options">
					<HamburgerMenuIcon />
				</button>
			</Dropdown.Trigger>

			<Dropdown.Portal>
				<Dropdown.Content className="DropdownMenuContent" sideOffset={5}>
					{data?.getTags.map((tag) => (
						<Dropdown.Item key={tag.id} className="DropdownMenuItem">
							{tag.name}
						</Dropdown.Item>
					))}
				</Dropdown.Content>
			</Dropdown.Portal>
		</Dropdown.Root>
	);
};

export default DropdownMenu;
