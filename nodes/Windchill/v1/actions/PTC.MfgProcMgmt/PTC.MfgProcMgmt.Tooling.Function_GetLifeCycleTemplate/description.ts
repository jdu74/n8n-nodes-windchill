import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtToolingFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
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
					"GET /Toolings('{ToolingId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
