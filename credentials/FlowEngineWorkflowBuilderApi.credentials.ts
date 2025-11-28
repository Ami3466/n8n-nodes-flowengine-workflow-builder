import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class FlowEngineWorkflowBuilderApi implements ICredentialType {
	name = 'flowEngineWorkflowBuilderApi';

	displayName = 'FlowEngine Workflow Builder API';

	documentationUrl = 'https://flowengine.cloud/api-docs';

	icon = 'file:flowengine.svg' as const;

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description:
				'Your FlowEngine API key. Get it from Settings at flowengine.cloud/settings',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://flowengine.cloud',
			url: '/api/v1/chat',
			method: 'POST',
			body: {
				message: 'Test connection',
			},
		},
	};
}
