import { INodeProperties } from "n8n-workflow";

export const ResourcePartDocAssociationsGetPartDocAssociationDescription: INodeProperties[] = [
	{
		displayName: 'ResourceId',
		name: 'ResourceId-string(path)',
		description: 'Resource ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Resources('{ResourceId}')/PartDocAssociations('{PartDocAssociationId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartDocAssociationId',
		name: 'PartDocAssociationId-string(path)',
		description: 'Part Doc Association ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Resources('{ResourceId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Resources('{ResourceId}')/PartDocAssociations('{PartDocAssociationId}')",
				],
			},
		},
	},
];
