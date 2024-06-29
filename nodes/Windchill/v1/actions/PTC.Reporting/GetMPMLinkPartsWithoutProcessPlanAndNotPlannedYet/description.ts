import { INodeProperties } from "n8n-workflow";

export const GetMpmLinkPartsWithoutProcessPlanAndNotPlannedYetDescription: INodeProperties[] = [
	{
		displayName: 'MPMLinkPartsWithoutProcessPlanAndNotPlannedYetId',
		name: 'MPMLinkPartsWithoutProcessPlanAndNotPlannedYetId-string(path)',
		description: 'Mpm Link Parts Without Process Plan And Not Planned Yet ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					"GET /MPMLinkPartsWithoutProcessPlanAndNotPlannedYets('{MPMLinkPartsWithoutProcessPlanAndNotPlannedYetId}')",
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
					'PTC.Reporting',
				],
				operation: [
					"GET /MPMLinkPartsWithoutProcessPlanAndNotPlannedYets('{MPMLinkPartsWithoutProcessPlanAndNotPlannedYetId}')",
				],
			},
		},
	},
];
