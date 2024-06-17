import { INodeProperties } from "n8n-workflow";

export const DeleteToolingDescription: INodeProperties[] = [
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
					"DELETE /Toolings('{ToolingId}')",
				],
			},
		},
		required: true,
	},
];
