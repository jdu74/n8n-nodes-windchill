import {
	ICredentialType,
	INodeProperties,
	NodePropertyTypes,
} from 'n8n-workflow';

export class WindchillApiKeysApi implements ICredentialType {
	name = 'windchillApiKeysApi';
	displayName = 'Windchill API Keys API';
	properties: INodeProperties[] = [
		{
			displayName: 'Endpoint',
			name: 'endpoint',
			type: 'string',
			noDataExpression: true,
			default: 'https://windchill-server',
			required: true
		},
		{
			displayName: 'user',
			name: 'user',
			noDataExpression: true,
			type: 'string',
			default: '',
			required: true
		},
		{
			displayName: 'password',
			name: 'password',
			noDataExpression: true,
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true
		},
	];
}
