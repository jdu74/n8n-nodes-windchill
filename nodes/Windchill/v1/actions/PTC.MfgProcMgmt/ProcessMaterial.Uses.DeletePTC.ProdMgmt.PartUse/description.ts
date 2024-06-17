import { INodeProperties } from "n8n-workflow";

export const ProcessMaterialUsesDeletePtcProdMgmtPartUseDescription: INodeProperties[] = [
	{
		displayName: 'ProcessMaterialId',
		name: 'ProcessMaterialId-string(path)',
		description: 'Process Material ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
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
					"DELETE /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
];
