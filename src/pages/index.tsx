import React, { useEffect, useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { CallOverrides, ethers } from "ethers";

type ActionFn = (contract: any) => void;

const Home: React.FC = () => {
  const [contractAddress, setContractAddress] = useState<string>(`0x097b1c2094e4C199a390A5B8d087aE5584A3CA7f`);
  const [action, setAction] = useState<ActionFn | string>(() => "console.log(contract)");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [contractAbi, setContractAbi] = useState<string>(`[{ ... }]`);
  const [className, setClassName] = useState<string>(`custom-class`);
  const [onSuccess, setOnSuccess] = useState<(result: any) => string>(() => (result: any) => `Success: ${result}`);
  const [onError, setOnError] = useState<(error: any) => string>(() => (error: any) => `Something went wrong: ${error}`);
  
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `<Web3Button\n${config.map(({ key, template }) => (checkboxes[key as keyof typeof checkboxes] ? `  ${template}\n` : "")).join("")}> \n Execute Action\n </Web3Button>`
    );
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  
  const [overrides, setOverrides] = useState<CallOverrides | undefined>({
    accessList: [],
    blockTag: "latest",
    ccipReadEnabled: false,
    customData: {},
    from: "0x...",
    gasLimit: 100000,
    gasPrice: 100000,
    maxFeePerGas: 100000,
    maxPriorityFeePerGas: 0,
    nonce: 0,
    type: 0,
    value: ethers.utils.formatEther(ethers.utils.parseEther("0.1")),
  });

  const [checkboxes, setCheckboxes] = useState({
    contractAddress: true,
    action: true,
    theme: true,
    contractAbi: false,
    overrides: false,
    onSuccess: true,
    onError: true,
    onSubmit: true,
    className: true,
  });

  const config = [
    { key: "className", value: className, template: `className="${className}"` },
    { key: "contractAddress", value: contractAddress, template: `contractAddress="${contractAddress}"` },
    { key: "action", value: action, template: `action={(contract) => ${action}}` },
    { key: "theme", value: theme, template: `theme="${theme}"` },
    { key: "onSuccess", value: onSuccess, template: `onSuccess={(result) => alert("${onSuccess}")}` },
    { key: "onError", value: onError, template: `onError={(error) => alert("${onError}")}` },
    { key: "contractAbi", value: contractAbi, template: `contractAbi={${contractAbi}}` },
    {
      key: "overrides",
      value: overrides,
      template: `overrides={{
        accessList: ${JSON.stringify(overrides?.accessList || [])},
        blockTag: "${overrides?.blockTag || "latest"}",
        ccipReadEnabled: ${overrides?.ccipReadEnabled || false},
        customData: ${JSON.stringify(overrides?.customData || {})},
        from: "${overrides?.from || ""}",
        gasLimit: ${overrides?.gasLimit || 0},
        gasPrice: ${overrides?.gasPrice || 0},
        maxFeePerGas: ${overrides?.maxFeePerGas || 0},
        maxPriorityFeePerGas: ${overrides?.maxPriorityFeePerGas || 0},
        nonce: ${overrides?.nonce || 0},
        type: ${overrides?.type || 0},
        value: "${overrides?.value || ""}"
      }}`
    }
  ];

  const handleCheckboxChange = (field: keyof typeof checkboxes) => {
    setCheckboxes({ ...checkboxes, [field]: !checkboxes[field] });
  };












  useEffect(() => {
    const checkMobile = () => {
      // Update the state depending on window width
      setIsMobile(window.innerWidth < 768);
    };

    // Check mobile on mount
    checkMobile();

    // Check on window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-purple-900 px-10 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Oops!</h1>
        <p className="text-2xl text-white text-center">
          We`re sorry, but this content isn`t available on mobile devices.
        </p>
        <p className="text-xl text-white mt-4 text-center">
          Please try accessing our content from a desktop or laptop for the best experience.
          We apologize for any inconvenience.
        </p>
      </div>
    );
    
  } else {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-purple-700 to-purple-900 px-10 py-12 justify-center gap-10">
        <div className="w-1/3 space-y-2 text-black">
          <div className="flex items-center">
            <label className="block ml-5 w-full">
              <span className="text-black font-bold text-2xl ml-2">Contract Address</span>
              <input
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded"
                type="text"
                placeholder="Enter contract address"
                value={contractAddress}
                onChange={(e) => setContractAddress(e.target.value)}
              />
            </label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" checked={checkboxes.className} onChange={() => handleCheckboxChange('className')} />
            <label className="block ml-2 w-full">

              <span className="text-black font-bold text-2xl ml-2">Class Name</span>
              <input
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded"
                type="text"
                placeholder="Enter class name"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
            </label>
          </div>
    
          <div className="flex items-center">
            <input type="checkbox" checked={checkboxes.action} onChange={() => handleCheckboxChange('action')} />
            <label className="block ml-2 w-full">

              <span className="text-black font-bold text-2xl ml-2">Action</span>
              <input
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded"
                type="text"
                placeholder="Enter action"
                value={action.toString()}
                onChange={(e) => setAction(e.target.value.toString())}
                />
            </label>
          </div>
    
          <div className="flex items-center">
            <input type="checkbox" checked={checkboxes.theme} onChange={() => handleCheckboxChange('theme')} />
            <label className="block ml-2 w-full">

              <span className="text-black font-bold text-2xl ml-2">Theme</span>
              <select
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded"
                value={theme.toString()}
                onChange={(e) => setTheme(e.target.value as "dark" | "light")}
                >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" checked={checkboxes.onSuccess} onChange={() => handleCheckboxChange('onSuccess')} />
            <label className="block ml-2 w-full">

              <span className="text-black font-bold text-2xl ml-2">On Success</span>
              <input
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded"
                type="text"
                placeholder="Enter on success message"
                value={onSuccess.toString()}
                onChange={(e) => setOnSuccess(() => e.target.value)}
                
              />
            </label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" checked={checkboxes.onError} onChange={() => handleCheckboxChange('onError')} />
            <label className="block ml-2 w-full">

              <span className="text-black font-bold text-2xl ml-2">On Error</span>
              <input
                className="mt-1 block w-full p-2 border-2 border-gray-300 rounded"
                type="text"
                placeholder="Enter on error message"
                value={onError.toString()}
                onChange={(e) => setOnError(() => e.target.value)}
              />
            </label>
          </div>


          <div className="flex items-center">
            <input type="checkbox" checked={checkboxes.contractAbi} onChange={() => handleCheckboxChange('contractAbi')} />
            <label className="block ml-2 w-full">

              <span className="text-black font-bold text-2xl ml-2">Contract ABI</span>
              <textarea
                className="mt-1 block w-full p-2 h-20 border-2 border-gray-300 rounded"
                placeholder="Enter contract ABI"
                value={contractAbi}
                onChange={(e) => setContractAbi(e.target.value)}
              />
            </label>
          </div>


          <div className="flex items-center">
            <input type="checkbox" checked={checkboxes.overrides} onChange={() => handleCheckboxChange('overrides')} />
            <span className="text-black font-bold text-2xl ml-2">Overrides</span>
          </div>

          <div className="flex flex-col items-start">
            {checkboxes.overrides && (
              <>
                <label className="mt-1 w-full">
                  <span className="text-black">CCIP Read Enabled</span>
                  <input
                    className="block w-full p-2 border-2 border-gray-300 rounded"
                    type="checkbox"
                    checked={overrides?.ccipReadEnabled}
                    onChange={(e) => setOverrides({ ...overrides, ccipReadEnabled: e.target.checked })}
                  />
                </label>

                <label className="mt-1 w-full">
                  <span className="text-black">Access List</span>
                  <textarea
                    className="block w-full p-2 h-20 border-2 border-gray-300 rounded"
                    placeholder="Enter access list"
                    value={JSON.stringify(overrides?.accessList, null, 2)}
                    onChange={(e) => setOverrides({ ...overrides, accessList: JSON.parse(e.target.value) })}
                  />
                </label>

                <label className="mt-1 w-full">
                  <span className="text-black">Block Tag</span>
                  <input
                    className="block w-full p-2 border-2 border-gray-300 rounded"
                    type="text"
                    placeholder="Enter block tag"
                    value={overrides?.blockTag?.toString() || ""}
                    onChange={(e) => setOverrides({ ...overrides, blockTag: e.target.value })}
                  />
                </label>

                <label className="mt-1 w-full">
                  <span className="text-black">Custom Data</span>
                  <textarea
                    className="block w-full p-2 h-20 border-2 border-gray-300 rounded"
                    placeholder="Enter custom data"
                    value={JSON.stringify(overrides?.customData, null, 2)}
                    onChange={(e) => setOverrides({ ...overrides, customData: JSON.parse(e.target.value) })}
                  />
                </label>

                <label className="mt-1 w-full">
                  <span className="text-black">From</span>
                  <input
                    className="block w-full p-2 border-2 border-gray-300 rounded"
                    type="text"
                    placeholder="Enter from address"
                    value={overrides?.from?.toString() || ""}
                    onChange={(e) => setOverrides({ ...overrides, from: e.target.value })}
                  />
                </label>

                <label className="mt-1 w-full">
                  <span className="text-black">Gas Limit</span>
                  <input
                    className="block w-full p-2 border-2 border-gray-300 rounded"
                    type="number"
                    placeholder="Enter gas limit"
                    value={overrides?.gasLimit?.toString() || ""}
                    onChange={(e) => setOverrides({ ...overrides, gasLimit: parseInt(e.target.value, 10) })}
                  />
                </label>

                <label className="mt-1 w-full">
                  <span className="text-black">Gas Price</span>
                  <input
                    className="block w-full p-2 border-2 border-gray-300 rounded"
                    type="number"
                    placeholder="Enter gas price"
                    value={overrides?.gasPrice?.toString() || ""}
                    onChange={(e) => setOverrides({ ...overrides, gasPrice: parseInt(e.target.value, 10) })}
                  />
                </label>

                <label className="mt-1 w-full">
                  <span className="text-black">Max Fee Per Gas</span>
                  <input
                    className="block w-full p-2 border-2 border-gray-300 rounded"
                    type="number"
                    placeholder="Enter max fee per gas"
                    value={overrides?.maxFeePerGas?.toString() || ""}
                    onChange={(e) => setOverrides({ ...overrides, maxFeePerGas: parseInt(e.target.value, 10) })}
                  />
                </label>

                <label className="mt-1 w-full">
                  <span className="text-black">Max Priority Fee Per Gas</span>
                  <input
                    className="block w-full p-2 border-2 border-gray-300 rounded"
                    type="number"
                    placeholder="Enter max priority fee per gas"
                    value={overrides?.maxPriorityFeePerGas?.toString() || ""}
                    onChange={(e) => setOverrides({ ...overrides, maxPriorityFeePerGas: parseInt(e.target.value, 10) })}
                  />
                </label>

                <label className="mt-1 w-full">
                  <span className="text-black">Nonce</span>
                  <input
                    className="block w-full p-2 border-2 border-gray-300 rounded"
                    type="number"
                    placeholder="Enter nonce"
                    value={overrides?.nonce?.toString() || ""}
                    onChange={(e) => setOverrides({ ...overrides, nonce: parseInt(e.target.value, 10) })}
                  />
                </label>

                <label className="mt-1 w-full">
                  <span className="text-black">Type</span>
                  <input
                    className="block w-full p-2 border-2 border-gray-300 rounded"
                    type="number"
                    placeholder="Enter type"
                    value={overrides?.type}
                    onChange={(e) => setOverrides({ ...overrides, type: parseInt(e.target.value, 10) })}
                  />
                </label>

                <label className="mt-1 w-full">
                  <span className="text-black">Value</span>
                  <input
                    className="block w-full p-2 border-2 border-gray-300 rounded"
                    type="text"
                    placeholder="Enter value"
                    value={overrides?.value?.toString() || ""}
                    onChange={(e) => setOverrides({ ...overrides, value: e.target.value })}
                  />
                </label>

              </>
            )}
          </div>
        </div>

  <div className="w-1/2 h-fit pb-10 text-white rounded overflow-auto">
      <div className="bg-black min-h-[620px] mb-10 pb-10 text-white rounded overflow-auto">
        <div className="flex items-center justify-between px-6 py-2 rounded-t bg-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-md font-mono">Web3Button</div>
          <button
              onClick={copyToClipboard}
              className={`p-2 rounded text-white font-bold bg-gray-600 ${
                copied ? "bg-green-500" : "hover:bg-gray-700"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
        </div>
        <pre className="text-white font-mono text-sm p-6">
          {`<Web3Button\n  `}
          {config.map(({ key, template }) => (checkboxes[key as keyof typeof checkboxes] ? `  ${template}\n  ` : ""))}
          {`>\n`}
          {`Execute Action\n`}
          {`</Web3Button>`}
        </pre>
    </div>
      <div className="italic mx-auto flex justify-center mb-4">Note: this playground uses the Goerli test network.</div>

        <div className="flex justify-center">
          <Web3Button
            contractAddress={checkboxes.contractAddress ? contractAddress : ""}
            action={checkboxes.action ? (typeof action === "string" ? new Function("contract", action) : action) : () => {}}
            theme={checkboxes.theme ? theme : undefined}
            contractAbi={checkboxes.contractAbi ? contractAbi : undefined}
            overrides={checkboxes.overrides ? overrides : undefined}
            onSuccess={checkboxes.onSuccess ? (result) => alert(onSuccess(result)) : undefined}
            onError={checkboxes.onError ? (error) => alert(onError(error)) : undefined}
            className={checkboxes.className ? className : undefined}
          >
            Execute Action
          </Web3Button>
        </div>
      </div>
    </div>
    );
  };
};

export default Home;