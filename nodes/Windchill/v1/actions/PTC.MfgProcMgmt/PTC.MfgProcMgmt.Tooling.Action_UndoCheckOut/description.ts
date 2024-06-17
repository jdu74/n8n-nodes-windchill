import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtToolingActionUndoCheckOutDescription: INodeProperties[] = [
	{
		displayName: 'ToolingId',
		name: 'ToolingId-string(path)',
		description: 'Tooling ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Toolings('{ToolingId}')/PTC.MfgProcMgmt.UndoCheckOut",
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
					"POST /Toolings('{ToolingId}')/PTC.MfgProcMgmt.UndoCheckOut",
				],
			},
		},
	},
];
