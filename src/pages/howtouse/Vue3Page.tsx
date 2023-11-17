import { Copy } from '@/assets/icons';
import { vueLatest } from '@/assets/images';
import { HowToUsePage } from '@/components/layouts';
import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function Vue3Page() {
  const [codeText, setCodeText] = React.useState('copy');

  const copyCode = () => {
    const code = '  yarn add meistericons-vue-latest';

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
            yarn add meistericons-vue-latest
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
            {`import {DeleteB} from 'meistericons-vue-latest'`}
          </code>

        </div>
      ),
    },
    {
      id: 3,
      step: (
        <div className="flex items-start justify-between px-4 py-2">
          <div>

            <code className="text-grey-800 text-lg leading-8 -tracking-[0.0225rem] font-normal">
              {`
              <script>
          `}
            </code>
            <code className="mt-2 ml-4 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
              {`
                import {ArrowDown} from "meistericons-vue-latest"
                `}
            </code>

            <code className="mt-2 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
              {`
              </script>
              `}
            </code>

            <code className="mt-4 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
              {`
              <template>
              `}
            </code>
            <code className="mt-2 ml-4 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
              {`
                < ArrowDown />
                `}
            </code>
            <code className="mt-2 text-grey-800 block text-lg leading-8 -tracking-[0.0225rem] font-normal">
              {`
          </template>
              `}
            </code>
          </div >

        </div >
      ),
    },
  ];

  return (
    <HowToUsePage
      image={vueLatest}
      title="MeisterIcons is available on vue as a javaScript library. The library lets you quickly search for the icons you’re looking
for."
      steps={steps}
    />
  );
}
