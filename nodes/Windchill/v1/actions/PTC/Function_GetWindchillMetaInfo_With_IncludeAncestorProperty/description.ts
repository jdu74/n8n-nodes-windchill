import { INodeProperties } from "n8n-workflow";

export const FunctionGetWindchillMetaInfoWithIncludeAncestorPropertyDescription: INodeProperties[] = [
	{
		displayName: 'EntityName',
		name: 'EntityName-string(path)',
		description: 'Entity Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					"GET /GetWindchillMetaInfo(EntityName='{EntityName}',IncludeAncestorProperty={IncludeAncestorProperty})",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'IncludeAncestorProperty',
		name: 'IncludeAncestorProperty-boolean(path)',
		description: 'Whether Include Ancestor Property - boolean (path)',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					"GET /GetWindchillMetaInfo(EntityName='{EntityName}',IncludeAncestorProperty={IncludeAncestorProperty})",
				],
			},
		},
		required: true,
	},
];
