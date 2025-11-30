import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogTitle,
  DialogFooter,
  DialogCloseTrigger,
  Field,
  Select,
  Box,
  Button,
  Flex,
  createListCollection,
} from "@chakra-ui/react";
import { Plus } from "lucide-react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  steps: { id: string }[];
};

const ConnectorOptionsModal = ({ isOpen, setIsOpen, steps }: Props) => {
  const stepCollection = createListCollection({
    items: steps,
    itemToString: (item) => item.id,
    itemToValue: (item) => item.id,
  });

  if (!isOpen) return null;

  return createPortal(
    <>
      <Flex
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        alignItems="center"
        justify="center"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.600"
        />
        <DialogRoot open={isOpen} onOpenChange={({ open }) => setIsOpen(open)}>
          <DialogContent maxW="400px">
            <DialogCloseTrigger />

            <DialogHeader>
              <DialogTitle>Connect Steps</DialogTitle>
            </DialogHeader>

            <DialogBody spaceY={4}>
              <Field.Root>
                <Field.Label>From Step</Field.Label>
                <Select.Root collection={stepCollection}>
                  <Select.Trigger />
                  <Select.Content>
                    {stepCollection.items.map((step) => (
                      <Select.Item key={step.id} item={step}>
                        {step.id}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </Field.Root>

              <Field.Root>
                <Field.Label>To Step</Field.Label>
                <Select.Root collection={stepCollection}>
                  <Select.Trigger />
                  <Select.Content>
                    {stepCollection.items.map((step) => (
                      <Select.Item key={step.id} item={step}>
                        {step.id}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </Field.Root>

              {/* Conditions */}
              <Field.Root>
                <Flex align="center" mt={1} flexDirection="column" gap="8px">
                  <Field.Label m={0}>Conditions</Field.Label>
                  <Button size="sm" variant="outline">
                    <Plus size={16} />
                    Add
                  </Button>
                </Flex>
              </Field.Root>
            </DialogBody>

            <DialogFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button colorScheme="blue" ml={2}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      </Flex>
    </>,
    document.getElementById("modal-portal")!
  );
};

export default ConnectorOptionsModal;
