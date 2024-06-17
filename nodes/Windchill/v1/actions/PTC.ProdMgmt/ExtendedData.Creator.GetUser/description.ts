import { INodeProperties } from "n8n-workflow";

export const ExtendedDataCreatorGetUserDescription: INodeProperties[] = [
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Creator",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ExtendedDataId',
		name: 'ExtendedDataId-string(path)',
		description: 'Extended Data ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Creator",
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
					{
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')/Creator",
				],
			},
		},
	},
];
