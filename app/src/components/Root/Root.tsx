import { Flex, Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import ConnectorOptionsModal from "./components/ConnectorOptionsModal";

type Step = {
  id: string;
};

const FORM_BUILDING_NODES = [
  {
    name: "Step",
  },
  {
    name: "Connector",
  },
  {
    name: "Experiment",
  },
];

type FormFlow = {
  steps: Step[];
};

let idTracker = 0;

const Root = () => {
  const [formFlow, setFormFlow] = useState<FormFlow>({ steps: [] });
  const [showConnectorModal, setShowConnectorModal] = useState(false);

  return (
    <Flex height="100vh" overflow="hidden">
      <Box
        width="420px"
        bg="gray.800"
        color="white"
        p={4}
        borderRight="1px solid"
        borderColor="gray.700"
      >
        <Heading size="md" fontWeight="bold" mb="24px">
          Create Form Flow
        </Heading>
        <Flex wrap="wrap" gap="8px">
          {FORM_BUILDING_NODES.map((node) => (
            <Flex
              key={node.name}
              alignItems="center"
              bg="whiteAlpha.600"
              cursor="pointer"
              height="120px"
              justifyContent="center"
              width="120px"
              onClick={() => {
                if (node.name === "Step") {
                  setFormFlow((prevState) => {
                    return {
                      ...prevState,
                      steps: [...prevState.steps, { id: `${++idTracker}` }],
                    };
                  });
                } else if (node.name === "Connector") {
                  setShowConnectorModal(true);
                }
              }}
            >
              {node.name}
            </Flex>
          ))}
        </Flex>
      </Box>
      <Flex flex="1" overflowY="auto" p={6} bg="gray.50" gap="24px">
        {formFlow.steps.map((step) => (
          <Flex
            key={step.id}
            bg="purple.500"
            alignItems="center"
            justifyContent="center"
            width="128px"
            height="128px"
          >
            {step.id}
          </Flex>
        ))}
        <ConnectorOptionsModal
          isOpen={showConnectorModal}
          setIsOpen={setShowConnectorModal}
          steps={formFlow.steps}
        />
      </Flex>
    </Flex>
  );
};

export default Root;
