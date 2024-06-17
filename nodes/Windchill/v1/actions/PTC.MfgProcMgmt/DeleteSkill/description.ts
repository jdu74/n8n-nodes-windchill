import { INodeProperties } from "n8n-workflow";

export const DeleteSkillDescription: INodeProperties[] = [
	{
		displayName: 'SkillId',
		name: 'SkillId-string(path)',
		description: 'Skill ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /Skills('{SkillId}')",
				],
			},
		},
		required: true,
	},
];
