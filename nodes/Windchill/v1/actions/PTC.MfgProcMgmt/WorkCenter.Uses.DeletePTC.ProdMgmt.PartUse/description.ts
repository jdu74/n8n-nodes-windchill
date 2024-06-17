import { INodeProperties } from "n8n-workflow";

export const WorkCenterUsesDeletePtcProdMgmtPartUseDescription: INodeProperties[] = [
	{
		displayName: 'WorkCenterId',
		name: 'WorkCenterId-string(path)',
		description: 'Work Center ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /WorkCenters('{WorkCenterId}')/Uses('{PartUseId}')",
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
					"DELETE /WorkCenters('{WorkCenterId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
];
