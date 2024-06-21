import { CustomFlowbiteTheme } from "flowbite-react";

export const flowbiteTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    },
  },
  checkbox: {
    root: {
      base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700",
      color: {
        default: "text-indigo-600",
      },
    },
  },
};
