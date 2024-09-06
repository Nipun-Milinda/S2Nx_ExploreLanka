import * as React from "react";
import ReactFlagsSelect from "react-flags-select";

export default function MenuSimple() {
  const [selected, setSelected] = React.useState("");

  return (
    <div className="my-5">
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        countries={["US", "GB", "FR", "DE", "IT"]}
        customLabels={{
          US: "English-US",
          GB: "English-GB",
          FR: "French",
          DE: "German",
          IT: "Italian",
        }}
        placeholder="Select Language"
        fullWidth={false}
        className="text-blue-gray-400 bg-white/50 rounded-2xl font-bold custom-dropdown w-55"
      />
    </div>
  );
}
