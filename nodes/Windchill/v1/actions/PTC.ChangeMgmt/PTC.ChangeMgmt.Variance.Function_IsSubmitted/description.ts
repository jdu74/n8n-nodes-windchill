import { INodeProperties } from "n8n-workflow";

export const PtcChangeMgmtVarianceFunctionIsSubmittedDescription: INodeProperties[] = [
	{
		displayName: 'VarianceId',
		name: 'VarianceId-string(path)',
		description: 'Variance ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /Variances('{VarianceId}')/PTC.ChangeMgmt.IsSubmitted()",
				],
			},
		},
		required: true,
	},
];
