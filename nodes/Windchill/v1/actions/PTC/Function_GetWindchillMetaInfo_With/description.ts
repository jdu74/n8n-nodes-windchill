import { INodeProperties } from "n8n-workflow";

export const FunctionGetWindchillMetaInfoWithDescription: INodeProperties[] = [
	{
		displayName: 'Path',
		name: 'path',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					'Function_GetWindchillMetaInfo_With',
				],
			},
		},
		default: "GET /GetWindchillMetaInfo(EntityName='{EntityName}')",
		options: [
			{
				name: "GET /GetWindchillMetaInfo(EntityName='{EntityName}')",
				value: "GET /GetWindchillMetaInfo(EntityName='{EntityName}')",
				description: "Function to get locale dependent Windchill metadata for a given entity or complex type name. - get /GetWindchillMetaInfo(EntityName='{EntityName}')",
				action: "GET /GetWindchillMetaInfo(EntityName='{EntityName}')",
			},
			{
				name: 'GET /GetWindchillMetaInfo(IncludeAncestorProperty={IncludeAncestorProperty})',
				value: 'GET /GetWindchillMetaInfo(IncludeAncestorProperty={IncludeAncestorProperty})',
				description: 'Function to get locale dependent Windchill metadata for entities and complex types present in a given domain with option to include inherited properties for the entities and complex types. - get /GetWindchillMetaInfo(IncludeAncestorProperty={IncludeAncestorProperty})',
				action: 'GET /GetWindchillMetaInfo(IncludeAncestorProperty={IncludeAncestorProperty})',
			},
		],
	},
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
					'Function_GetWindchillMetaInfo_With',
				],
				path: [
					"GET /GetWindchillMetaInfo(EntityName='{EntityName}')",
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
					'Function_GetWindchillMetaInfo_With',
				],
				path: [
					'GET /GetWindchillMetaInfo(IncludeAncestorProperty={IncludeAncestorProperty})',
				],
			},
		},
		required: true,
	},
];
