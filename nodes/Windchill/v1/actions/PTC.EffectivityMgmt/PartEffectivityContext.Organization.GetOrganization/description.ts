import { INodeProperties } from "n8n-workflow";

export const PartEffectivityContextOrganizationGetOrganizationDescription: INodeProperties[] = [
	{
		displayName: 'PartEffectivityContextId',
		name: 'PartEffectivityContextId-string(path)',
		description: 'Part Effectivity Context ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.EffectivityMgmt',
				],
				operation: [
					"GET /PartEffectivityContexts('{PartEffectivityContextId}')/Organization",
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
					'PTC.EffectivityMgmt',
				],
				operation: [
					"GET /PartEffectivityContexts('{PartEffectivityContextId}')/Organization",
				],
			},
		},
	},
];
