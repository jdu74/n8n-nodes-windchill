import { INodeProperties } from "n8n-workflow";

export const ResourceUsesDeletePtcProdMgmtPartUseDescription: INodeProperties[] = [
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
					"DELETE /Resources('{ResourceId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /Resources('{ResourceId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
];
