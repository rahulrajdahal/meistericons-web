import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Dialog, Transition } from '@headlessui/react';
import { Copy, DownArrow, download } from '@/assets/icons';
import { useWindowSize } from '@/hooks';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { IconNode, createReactComponent } from '@/utils/helpers';
import * as Toast from '@radix-ui/react-toast';

interface Props {
  name: string;
  component: React.FC;
  icons?: IconNode[];
}

export default function IconButton({ icons, component: IconComponent, name }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const renderRelatedIcons = () => {
    const relatedIcons = icons?.filter(([iconName, iconNode]) => {
      const words = (iconName as string).split('-');

      return words.some((word) => {
        if (word.includes(name.split('-')[0])) {
          return [iconName, iconNode];
        }
      });
    });

    const allRealtedIcons = React.useMemo(() => {
      if (relatedIcons && relatedIcons?.length < 30 && icons && icons.length > 0) {
        return [...relatedIcons, ...icons.slice(relatedIcons?.length, 30)];
      }
      return relatedIcons;
    }, [relatedIcons, icons]);

    return allRealtedIcons && allRealtedIcons?.length > 0 ? (
      <>
        <strong className="uppercase  text-grey-700 tracking-[0.12rem] font-semibold mt-10">Related Icons</strong>
        <div className="mt-8 grid grid-cols-10 gap-10 place-items-center">
          {allRealtedIcons?.map(([name, iconNode]) => (
            <Tooltip.Provider key={name as string}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button
                    title={name as string}
                    className="p-5 rounded-[20px]
          hover:bg-grey-100 hover:cursor-pointer"
                  >
                    <Icon component={createReactComponent(name as string, iconNode as IconNode[])} />
                  </button>
                </Tooltip.Trigger>

                <Tooltip.Portal>
                  <Tooltip.Content
                    align="start"
                    className="bg-grey-900 z-30 text-[#F2F2F2] px-3 py-[0.375rem] rounded-[0.625rem] shadow-[0px 15px 99px 0px #E1E8F0]"
                  >
                    {name as string}
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          ))}
        </div>
      </>
    ) : null;
  };

  return (
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
            <IconModal
              renderRelatedIcons={() => renderRelatedIcons()}
              isOpen={isOpen}
              closeModal={closeModal}
              name={name}
              component={IconComponent}
            />
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
  );
}

const IconModal = ({
  isOpen,
  closeModal,
  name,
  component: IconComponent,
  renderRelatedIcons,
}: {
  component: any;
  name: string;
  isOpen: boolean;
  closeModal: () => void;
  renderRelatedIcons?: any;
}) => {
  const getCssCode = () => {
    navigator.clipboard.writeText(`<i class="min mni-${name}"></i>`);

    setOpen(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, 100);
  };
  const iconRef = React.useRef<any>(null);
  const handleCopySvg = () => {
    const svg: string = iconRef.current.childNodes[0].outerHTML;
    navigator.clipboard.writeText(svg);

    setOpen(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, 100);
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
    const svg = iconRef.current.childNodes[0].outerHTML;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const blobUrl = URL.createObjectURL(blob);

    const image = new Image();
    const canvas: HTMLCanvasElement = document.createElement('canvas');

    const svgChild = iconRef.current.childNodes[0];
    document.body.appendChild(canvas);

    image.width = svgChild.width.baseVal.value;
    image.height = svgChild.height.baseVal.value;
    image.src = blobUrl;

    image.onload = function () {
      canvas.style.width = String(image.width);
      canvas.style.height = String(image.height);

      const ctx = canvas.getContext('2d');
      ctx?.drawImage(image, 0, 0);
      URL.revokeObjectURL(blobUrl);

      const imgURI = canvas.toDataURL();

      const a = document.createElement('a');
      a.download = `${name}.png`;
      a.target = '_blank';
      a.href = imgURI;

      a.click();

      document.body.removeChild(canvas);
    };
  };

  const { width } = useWindowSize();

  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog open={isOpen} as="div" className="relative z-20" onClose={closeModal}>
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

        <div className="fixed inset-0">
          <div className="flex items-center justify-center p-4 text-center absolute top-[25%] left-0 right-0 min-h-screen w-full ">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >
              <Dialog.Panel className="w-full max-w-[62.5rem] rounded-[2.5rem] bg-white p-6 text-left align-middle shadow-xl transition-all h-[90vh]">
                <button
                  title="close"
                  className="absolute top-[3.25rem] right-10 text-2xl 
                hover:cursor-pointer"
                  onClick={closeModal}
                >
                  &#x2715;
                </button>
                <div
                  className={`py-10 pl-10 pr-[2.75rem] items-center w-full flex flex-col justify-center gap-8
                md:flex-row`}
                >
                  <span
                    ref={iconRef}
                    className="p-[4.75rem] rounded-[2rem] bg-grey-100 flex items-center justify-center
                  md:h-60"
                  >
                    <IconComponent size={width < 768 ? 40 : 168} />
                  </span>
                  <div className="flex flex-col gap-5 w-full">
                    <p
                      data-title="icon name"
                      className="before:content-[attr(data-title)] before:text-grey-700 before:text-base before:font-semibold before:tracking-[0.12rem] before:uppercase before:block
                       font-bold text-2xl text-grey-800 -tracking-[0.03rem]"
                    >
                      {name as string}
                    </p>
                    <span
                      className="flex flex-wrap gap-3 items-center
                    md:flex-nowrap"
                    >
                      <ToggleGroup.Root
                        className="flex border border-grey-300 bg-grey-50 rounded-xl"
                        type="single"
                        defaultValue="center"
                        aria-label="download"
                      >
                        <ToggleGroup.Item
                          value="download SVG"
                          aria-label="Download SVG"
                          className="px-4 hover:bg-grey-100 py-3 flex text-base min-w-fit font-semibold text-grey-700 -tracking-[0.02rem] items-center gap-1 w-full border-r border-r-grey-300"
                          onClick={handleDownloadsvg}
                        >
                          <img src={download} alt="download svg" className="w-5 h-5" />
                          Download SVG
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                          value="copy svg"
                          aria-label="Copy SVG"
                          className="px-4 hover:bg-grey-100 py-3 min-w-fit flex text-base font-semibold text-grey-700 -tracking-[0.02rem] items-center gap-1 w-full"
                          onClick={handleCopySvg}
                        >
                          <Toast.Provider swipeDirection="right">
                            <Copy className="w-5 h-5 text-grey-700" />
                            Copy SVG
                            <Toast.Root
                              open={open}
                              onOpenChange={setOpen}
                              className="bg-grey-900  rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
                            >
                              <Toast.Title className=" text-grey-50 [grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
                                Copied
                              </Toast.Title>
                            </Toast.Root>
                            <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
                          </Toast.Provider>
                        </ToggleGroup.Item>
                      </ToggleGroup.Root>

                      <ToggleGroup.Root
                        className="flex border border-grey-300 bg-grey-50 rounded-xl"
                        type="single"
                        defaultValue="center"
                        aria-label="download"
                      >
                        <ToggleGroup.Item
                          value="download SVG"
                          aria-label="Download SVG"
                          className="px-4 hover:bg-grey-100 py-3 flex text-base min-w-fit font-semibold text-grey-700 -tracking-[0.02rem] items-center gap-1 w-full border-r border-r-grey-300"
                          onClick={handleDownloadpng}
                        >
                          Download PNG
                        </ToggleGroup.Item>

                        <ToggleGroup.Item
                          value="download png"
                          aria-label="Download PNG"
                          className="p-2 hover:bg-grey-100 flex text-base min-w-fit font-semibold text-grey-700 -tracking-[0.02rem] items-center gap-1 w-full border-r border-r-grey-300"
                        >
                          <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                              <button aria-label="download png">
                                <DownArrow
                                  width={20}
                                  height={20}
                                  className="w-5 h-5 p-3 text-grey-700 fill-grey-700 stroke-grey-700"
                                />
                              </button>
                            </DropdownMenu.Trigger>

                            <DropdownMenu.Portal>
                              <DropdownMenu.Content
                                className="bg-grey-200 z-[99] rounded-2xl py-4 px-8 border border-grey-600"
                                sideOffset={5}
                              >
                                <DropdownMenu.Item>24</DropdownMenu.Item>
                                <DropdownMenu.Item>32</DropdownMenu.Item>
                                <DropdownMenu.Item>48</DropdownMenu.Item>
                                <DropdownMenu.Item>128</DropdownMenu.Item>
                                <DropdownMenu.Item>512</DropdownMenu.Item>
                              </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                          </DropdownMenu.Root>
                        </ToggleGroup.Item>
                      </ToggleGroup.Root>

                      {/* <button
                        onClick={handleDownloadsvg}
                        className="px-6 py-3 bg-primary-600 rounded-lg font-medium text-base text-grey-50 whitespace-nowrap"
                      >
                        <img src={download} alt="download svg" /> Download SVG
                      </button>
                      <button
                        onClick={handleDownloadpng}
                        className="px-6 py-3 bg-grey-300 rounded-lg font-medium text-base text-grey-700  whitespace-nowrap"
                      >
                        Download PNG
                      </button> */}
                      {/* <button
                        onClick={handleCopySvg}
                        className="px-6 py-3 bg-grey-300 rounded-lg font-medium text-base text-grey-700  whitespace-nowrap"
                      >
                        Copy SVG
                      </button> */}
                    </span>
                    <span className="flex items-center justify-between bg-grey-900 rounded-xl p-5 font-bold text-sm text-grey-50">
                      <span>
                        {'<i'} <span className="text-[#8BA2FF]">class</span> {'=“'}
                        <span className="text-[#FFA83F]">mni&nbsp;</span>
                        <span className="text-[#77B876]">mni-{name as string}</span> {'”></i>'}
                      </span>
                      <div className="w-fit">
                        <Toast.Provider swipeDirection="right">
                          <button onClick={getCssCode} title="Copy to clipboard">
                            <Copy
                              className="w-4 h-4
                        hover:cursor-pointer"
                            />
                          </button>

                          <Toast.Root
                            open={open}
                            onOpenChange={setOpen}
                            className="bg-grey-900 rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
                          >
                            <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px] text-grey-50">
                              Copied
                            </Toast.Title>
                          </Toast.Root>
                          <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
                        </Toast.Provider>
                      </div>
                    </span>
                  </div>
                </div>
                {renderRelatedIcons()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const Icon = ({ component: Component }: { component: React.FC }) => {
  return <Component />;
};
