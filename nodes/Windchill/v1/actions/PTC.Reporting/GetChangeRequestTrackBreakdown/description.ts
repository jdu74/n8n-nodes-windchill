import { INodeProperties } from "n8n-workflow";

export const GetChangeRequestTrackBreakdownDescription: INodeProperties[] = [
	{
		displayName: 'ChangeRequestTrackBreakdownId',
		name: 'ChangeRequestTrackBreakdownId-string(path)',
		description: 'Change Request Track Breakdown ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					"GET /ChangeRequestTrackBreakdowns('{ChangeRequestTrackBreakdownId}')",
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
					"GET /ChangeRequestTrackBreakdowns('{ChangeRequestTrackBreakdownId}')",
				],
			},
		},
	},
];
