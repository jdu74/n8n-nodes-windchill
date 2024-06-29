import { INodeProperties } from "n8n-workflow";

export const FunctionGetDependencyGraphFlatWithDomainVersionDescription: INodeProperties[] = [
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
					"GET /GetDependencyGraphFlat(DomainName='{DomainName}',DomainVersion='{DomainVersion}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'DomainVersion',
		name: 'DomainVersion-string(path)',
		description: 'Domain Version - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					"GET /GetDependencyGraphFlat(DomainName='{DomainName}',DomainVersion='{DomainVersion}')",
				],
			},
		},
		required: true,
	},
];
