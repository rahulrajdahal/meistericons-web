import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Dialog, Transition } from '@headlessui/react';
import { saveSvgAsPng } from 'save-svg-as-png';
import { Copy } from '@/assets/icons';

interface Props {
  name: string;
  component: React.FC;
}

export default function IconButton({ component: IconComponent, name }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    // <span title={name} aria-label={name} className="flex items-center justify-center p-5 hover:bg-grey-100">
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            title={name}
            onClick={openModal}
            className="p-5 rounded-[20px]
          hover:bg-grey-100 hover:cursor-pointer"
          >
            <IconComponent />
            <IconModal isOpen={isOpen} closeModal={closeModal} name={name} component={IconComponent} />
          </button>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            align="start"
            className="bg-grey-900 text-[#F2F2F2] px-3 py-[0.375rem] rounded-[0.625rem] shadow-[0px 15px 99px 0px #E1E8F0]"
          >
            {name}
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
    // </span>
  );
}

const IconModal = ({
  isOpen,
  closeModal,
  name,
  component: IconComponent,
}: {
  component: any;
  name: string;
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const getCssCode = () => {
    navigator.clipboard.writeText(`<i class="min mni-${name}"></i>`);
  };
  const iconRef = React.useRef<any>(null);
  const handleCopySvg = () => {
    const svg: string = iconRef.current.childNodes[0].outerHTML;
    navigator.clipboard.writeText(svg);
  };

  const handleDownloadsvg = () => {
    const svg = iconRef.current.childNodes[0].outerHTML;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
  };

  const handleDownloadpng = () => {
    const svg = iconRef.current.childNodes[0];
    saveSvgAsPng(svg, `${name}.png`);
  };

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-grey-100 p-6 text-left align-middle shadow-xl transition-all">
                <div className={`py-4 items-center w-full flex justify-center max-w-min gap-4 px-8`}>
                  <span ref={iconRef} className="w-[240px] h-[240px] bg-white flex items-center justify-center">
                    <IconComponent size={80} />
                  </span>
                  <div className="flex flex-col gap-5">
                    <p className="font-bold text-xl leading-8 text-grey-800">{name as string}</p>{' '}
                    <span className="inline-flex gap-3 items-center">
                      <button
                        onClick={handleDownloadsvg}
                        className="px-6 py-3 bg-primary-600 rounded-lg font-medium text-base text-grey-50 whitespace-nowrap"
                      >
                        Download SVG
                      </button>
                      <button
                        onClick={handleDownloadpng}
                        className="px-6 py-3 bg-grey-300 rounded-lg font-medium text-base text-grey-700  whitespace-nowrap"
                      >
                        Download PNG
                      </button>
                      <button
                        onClick={handleCopySvg}
                        className="px-6 py-3 bg-grey-300 rounded-lg font-medium text-base text-grey-700  whitespace-nowrap"
                      >
                        Copy SVG
                      </button>
                    </span>
                    <span className="flex items-center justify-between bg-grey-900 rounded-xl p-5 font-bold text-sm text-grey-50">
                      <span>
                        {'<i'} <span className="text-[#8BA2FF]">class</span> {'=“'}
                        <span className="text-[#FFA83F]">mni</span>
                        <span className="text-[#77B876]">mni-{name as string}</span> {'”></i>'}
                      </span>
                      <button title="Copy to clipboard">
                        <Copy
                          className="w-4 h-4
                        hover:cursor-pointer"
                          onClick={getCssCode}
                        />
                      </button>
                    </span>
                  </div>
                </div>
                <button
                  title="close"
                  className="absolute top-2 right-4 text-2xl 
                hover:cursor-pointer"
                  onClick={closeModal}
                >
                  &#x2715;
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
