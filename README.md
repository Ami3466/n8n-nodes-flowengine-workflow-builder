# n8n-nodes-flowengine-workflow-builder

This is an n8n community node. It lets you use [FlowEngine Workflow Builder](https://flowengine.cloud) in your n8n workflows.

FlowEngine Workflow Builder is an AI-powered workflow automation tool that helps you create and manage workflows using natural language.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### FlowEngine Workflow Builder Node

- **Send Message**: Send a message to FlowEngine AI and receive an AI-generated response
  - Choose between Regular (faster, lower cost) or Boost (more powerful) models
  - Optionally continue existing conversations using Conversation ID

## Credentials

### FlowEngine Workflow Builder API

To use this node, you need a FlowEngine API key:

1. Sign up at [flowengine.cloud](https://flowengine.cloud)
2. Go to [Settings](https://flowengine.cloud/settings)
3. Generate a new API key
4. Add the API key to your n8n credentials

## Compatibility

- Minimum n8n version: 1.0.0
- Tested with n8n versions: 1.40.0+

## Usage

### Basic Chat with FlowEngine

1. Add the **FlowEngine Workflow Builder** node to your workflow
2. Configure your FlowEngine Workflow Builder API credentials
3. Enter your message in the Message field
4. Choose the model (Regular or Boost)
5. Execute to get an AI response

### Continuing Conversations

To maintain context across multiple messages:

1. After the first message, capture the `conversation_id` from the response
2. Pass this `conversation_id` in the Additional Fields for subsequent messages

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [FlowEngine Documentation](https://flowengine.cloud/api-docs)
- [FlowEngine Website](https://flowengine.cloud)

## License

[MIT](LICENSE.md)
