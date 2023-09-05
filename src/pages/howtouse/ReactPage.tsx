import { Copy } from '@/assets/icons';
import { react } from '@/assets/images';
import { HowToUsePage } from '@/components/layouts';
import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function ReactPage() {
  const [codeText, setCodeText] = React.useState('copy');

  const copyCode = () => {
    const code = '  yarn add meistericons-react';

    // Copy the text inside the text field
    navigator.clipboard.writeText(code);
    setCodeText('copied');
  };

  const steps = [
    {
      id: 1,
      step: (
        <div className="flex items-start justify-between px-4 py-2">
          <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
            yarn add meistericons-react
          </code>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button title={codeText} onClick={copyCode}>
                  <Copy className="w-5 h-5 text-grey-800" />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content sideOffset={5} className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2">
                  {codeText}
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      ),
    },
    {
      id: 2,
      step: (
        <div className="flex items-start justify-between px-4 py-2">
          <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
            {`import {DeleteB} from 'meistericons-react'`}
          </code>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button title={codeText} onClick={copyCode}>
                  <Copy className="w-5 h-5 text-grey-800" />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content sideOffset={5} className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2">
                  {codeText}
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      ),
    },
    {
      id: 3,
      step: (
        <div className="flex items-start justify-between px-4 py-2">
          <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">{`<DeleteB/>`}</code>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button title={codeText} onClick={copyCode}>
                  <Copy className="w-5 h-5 text-grey-800" />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content sideOffset={5} className="bg-grey-900 text-grey-50 rounded-lg px-4 py-2">
                  {codeText}
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      ),
    },
  ];

  return (
    <HowToUsePage
      image={react}
      title="MeisterIcons is available on react as a javaScript library. The library lets you quickly search for the icons you’re looking
for."
      steps={steps}
    />
  );
}
