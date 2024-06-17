import { INodeProperties } from "n8n-workflow";

export const DeleteWorkCenterDescription: INodeProperties[] = [
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
					"DELETE /WorkCenters('{WorkCenterId}')",
				],
			},
		},
		required: true,
	},
];
