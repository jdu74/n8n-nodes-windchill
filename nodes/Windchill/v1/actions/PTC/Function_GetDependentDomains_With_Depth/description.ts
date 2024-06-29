import { INodeProperties } from "n8n-workflow";

export const FunctionGetDependentDomainsWithDepthDescription: INodeProperties[] = [
	{
		displayName: 'DomainName',
		name: 'DomainName-string(path)',
		description: 'Domain Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					"GET /GetDependentDomains(DomainName='{DomainName}',Depth='{Depth}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'Depth',
		name: 'Depth-integer(path)',
		description: 'Depth - integer (path)',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					"GET /GetDependentDomains(DomainName='{DomainName}',Depth='{Depth}')",
				],
			},
		},
		required: true,
	},
];
