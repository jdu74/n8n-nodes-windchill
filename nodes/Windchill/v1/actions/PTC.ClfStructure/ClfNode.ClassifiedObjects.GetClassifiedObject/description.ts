import { INodeProperties } from "n8n-workflow";

export const ClfNodeClassifiedObjectsGetClassifiedObjectDescription: INodeProperties[] = [
	{
		displayName: 'ClfNodeId',
		name: 'ClfNodeId-string(path)',
		description: 'Clf Node ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ClfStructure',
				],
				operation: [
					"GET /ClfNodes('{ClfNodeId}')/ClassifiedObjects('{ClassifiedObjectId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ClassifiedObjectId',
		name: 'ClassifiedObjectId-string(path)',
		description: 'Classified Object ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ClfStructure',
				],
				operation: [
					"GET /ClfNodes('{ClfNodeId}')/ClassifiedObjects('{ClassifiedObjectId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ClfStructure',
				],
				operation: [
					"GET /ClfNodes('{ClfNodeId}')/ClassifiedObjects('{ClassifiedObjectId}')",
				],
			},
		},
	},
];
