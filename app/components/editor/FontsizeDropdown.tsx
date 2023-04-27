import { SelectGroup } from '@radix-ui/react-select';
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/Select';
import { FiSettings } from 'react-icons/fi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/DropdownMenu';

interface IPropsSelectFontsize {
  fontSize: string;
  onChange: (newVal: string) => void;
}

const SelectFontsize = ({ fontSize, onChange }: IPropsSelectFontsize) => {
  const options = ['12px', '14px', '16px', '18px', '22px', '26px'];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 
        duration-200 transition-all rounded-md p-1 w-8 h-8 mr-2">
          <FiSettings className="w-full h-full" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-10 bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-500">
        <DropdownMenuLabel>Select font size</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={fontSize} onValueChange={onChange}>
          {options.map((option, idx) => (
            <DropdownMenuRadioItem key={idx} value={option}>
              {option}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectFontsize;
