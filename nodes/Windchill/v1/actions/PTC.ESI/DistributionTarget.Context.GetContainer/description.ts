import { INodeProperties } from "n8n-workflow";

export const DistributionTargetContextGetContainerDescription: INodeProperties[] = [
	{
		displayName: 'DistributionTargetId',
		name: 'DistributionTargetId-string(path)',
		description: 'Distribution Target ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ESI',
				],
				operation: [
					"GET /DistributionTargets('{DistributionTargetId}')/Context",
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
					'PTC.ESI',
				],
				operation: [
					"GET /DistributionTargets('{DistributionTargetId}')/Context",
				],
			},
		},
	},
];
