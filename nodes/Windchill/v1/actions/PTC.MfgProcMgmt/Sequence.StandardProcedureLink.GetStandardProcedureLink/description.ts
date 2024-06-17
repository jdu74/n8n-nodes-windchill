import { INodeProperties } from "n8n-workflow";

export const SequenceStandardProcedureLinkGetStandardProcedureLinkDescription: INodeProperties[] = [
	{
		displayName: 'SequenceId',
		name: 'SequenceId-string(path)',
		description: 'Sequence ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Sequences('{SequenceId}')/StandardProcedureLink('{StandardProcedureLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'StandardProcedureLinkId',
		name: 'StandardProcedureLinkId-string(path)',
		description: 'Standard Procedure Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Sequences('{SequenceId}')/StandardProcedureLink('{StandardProcedureLinkId}')",
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
					"GET /Sequences('{SequenceId}')/StandardProcedureLink('{StandardProcedureLinkId}')",
				],
			},
		},
	},
];
